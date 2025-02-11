interface StarfieldConfig {
  numStars?: number;
  baseSpeed?: number;
  trailLength?: number;
  starColor?: string;
  canvasColor?: string;
  hueJitter?: number;
  maxAcceleration?: number;
  accelerationRate?: number;
  decelerationRate?: number;
  minSpawnRadius?: number;
  maxSpawnRadius?: number;
  auto?: boolean;
  originX?: number | null;
  originY?: number | null;
  container?: HTMLElement | null;
  originElement?: HTMLElement | null;
}

interface StarfieldModule {
  setup(config?: StarfieldConfig): void;
  setAccelerate(state: boolean): void;
  setOrigin(x: number, y: number): void;
  setOriginX(x: number): void;
  setOriginY(y: number): void;
  resize(newWidth: number, newHeight: number): void;
  cleanup(): void;
}

interface Window {
  Starfield?: StarfieldModule;
}
