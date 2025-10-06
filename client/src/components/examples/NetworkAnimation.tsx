import { NetworkAnimation } from '../NetworkAnimation';

export default function NetworkAnimationExample() {
  return (
    <div className="relative h-screen w-full bg-background">
      <NetworkAnimation />
      <div className="relative z-10 flex items-center justify-center h-full">
        <p className="text-2xl font-bold text-primary">Mova o mouse para ver a animação da teia</p>
      </div>
    </div>
  );
}
