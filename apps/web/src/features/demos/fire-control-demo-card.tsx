import { YouTubeDemoCard } from "@/features/demos/youtube-demo-card";

export function FireControlDemoCard() {
  return (
    <YouTubeDemoCard
      title="Autonomous Fire-Control System"
      videoId="wc8d2S4JIZs"
      description="An autonomous fire-control system I built in the Webots robotics simulator. Because Webots radars are only 2D, I simulated two noisy 3D radars: a wide-FOV search radar and a narrow, precise fire-control radar on the turret. Their measurements are fused with a Kalman filter to predict where the incoming red projectile will be, and once the prediction settles the turret fires a blue interceptor at that point. A statistical pre-aim subsystem also pre-slews the turret toward the likely launch region. A full explainer video is coming soon."
    />
  );
}
