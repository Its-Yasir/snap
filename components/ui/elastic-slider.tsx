"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

const MAX_OVERFLOW = 50;

interface ElasticSliderProps {
  value: number;
  min?: number;
  max?: number;
  className?: string;
  isStepped?: boolean;
  stepSize?: number;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onChange?: (value: number) => void;
  isDark?: boolean;
}

const ElasticSlider: React.FC<ElasticSliderProps> = ({
  value,
  min = 0,
  max = 100,
  className = "",
  isStepped = false,
  stepSize = 1,
  leftIcon,
  rightIcon,
  onChange,
  isDark = false,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 w-full",
        className,
      )}
    >
      <Slider
        value={value}
        min={min}
        max={max}
        isStepped={isStepped}
        stepSize={stepSize}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        onChange={onChange}
        isDark={isDark}
      />
    </div>
  );
};

interface SliderProps {
  value: number;
  min: number;
  max: number;
  isStepped: boolean;
  stepSize: number;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onChange?: (value: number) => void;
  isDark: boolean;
}

const Slider: React.FC<SliderProps> = ({
  value: controlledValue,
  min,
  max,
  isStepped,
  stepSize,
  leftIcon,
  rightIcon,
  onChange,
  isDark,
}) => {
  const [internalValue, setInternalValue] = useState<number>(controlledValue);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [region, setRegion] = useState<"left" | "middle" | "right">("middle");
  const clientX = useMotionValue(0);
  const overflow = useMotionValue(0);
  const scale = useMotionValue(1);

  useEffect(() => {
    setInternalValue(controlledValue);
  }, [controlledValue]);

  useMotionValueEvent(clientX, "change", (latest: number) => {
    if (sliderRef.current) {
      const { left, right } = sliderRef.current.getBoundingClientRect();
      let newValue: number;
      if (latest < left) {
        setRegion("left");
        newValue = left - latest;
      } else if (latest > right) {
        setRegion("right");
        newValue = latest - right;
      } else {
        setRegion("middle");
        newValue = 0;
      }
      overflow.jump(decay(newValue, MAX_OVERFLOW));
    }
  });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.buttons > 0 && sliderRef.current) {
      const { left, width } = sliderRef.current.getBoundingClientRect();
      let newValue = min + ((e.clientX - left) / width) * (max - min);
      if (isStepped) {
        newValue = Math.round(newValue / stepSize) * stepSize;
      }
      newValue = Math.min(Math.max(newValue, min), max);
      setInternalValue(newValue);
      onChange?.(newValue);
      clientX.jump(e.clientX);
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    handlePointerMove(e);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerUp = () => {
    animate(overflow, 0, { type: "spring", bounce: 0.5 });
  };

  const getRangePercentage = (): number => {
    const totalRange = max - min;
    if (totalRange === 0) return 0;
    return ((internalValue - min) / totalRange) * 100;
  };

  return (
    <>
      <motion.div
        onHoverStart={() => animate(scale, 1.2)}
        onHoverEnd={() => animate(scale, 1)}
        onTouchStart={() => animate(scale, 1.2)}
        onTouchEnd={() => animate(scale, 1)}
        style={{
          scale,
          opacity: useTransform(scale, [1, 1.2], [0.8, 1]),
        }}
        className="flex w-full touch-none select-none items-center justify-center gap-3"
      >
        {leftIcon && (
          <motion.div
            animate={{
              scale: region === "left" ? [1, 1.4, 1] : 1,
              transition: { duration: 0.25 },
            }}
            style={{
              x: useTransform(() =>
                region === "left" ? -overflow.get() / scale.get() : 0,
              ),
            }}
            className={isDark ? "text-neutral-500" : "text-neutral-400"}
          >
            {leftIcon}
          </motion.div>
        )}

        <div
          ref={sliderRef}
          className="relative flex w-full grow cursor-grab touch-none select-none items-center py-3"
          onPointerMove={handlePointerMove}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <motion.div
            style={{
              scaleX: useTransform(() => {
                if (sliderRef.current) {
                  const { width } = sliderRef.current.getBoundingClientRect();
                  return 1 + overflow.get() / width;
                }
                return 1;
              }),
              scaleY: useTransform(overflow, [0, MAX_OVERFLOW], [1, 0.8]),
              transformOrigin: useTransform(() => {
                if (sliderRef.current) {
                  const { left, width } =
                    sliderRef.current.getBoundingClientRect();
                  return clientX.get() < left + width / 2 ? "right" : "left";
                }
                return "center";
              }),
              height: useTransform(scale, [1, 1.2], [6, 10]),
              marginTop: useTransform(scale, [1, 1.2], [0, -2]),
              marginBottom: useTransform(scale, [1, 1.2], [0, -2]),
            }}
            className="flex grow"
          >
            <div
              className={cn(
                "relative h-full grow overflow-hidden rounded-full shadow-inner",
                isDark ? "bg-neutral-800" : "bg-neutral-200",
              )}
            >
              <div
                className="absolute h-full bg-emerald-500 rounded-full transition-all duration-75"
                style={{ width: `${getRangePercentage()}%` }}
              />
            </div>
          </motion.div>
        </div>

        {rightIcon && (
          <motion.div
            animate={{
              scale: region === "right" ? [1, 1.4, 1] : 1,
              transition: { duration: 0.25 },
            }}
            style={{
              x: useTransform(() =>
                region === "right" ? overflow.get() / scale.get() : 0,
              ),
            }}
            className={isDark ? "text-neutral-500" : "text-neutral-400"}
          >
            {rightIcon}
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

function decay(value: number, max: number): number {
  if (max === 0) {
    return 0;
  }
  const entry = value / max;
  const sigmoid = 2 * (1 / (1 + Math.exp(-entry)) - 0.5);
  return sigmoid * max;
}

export default ElasticSlider;
