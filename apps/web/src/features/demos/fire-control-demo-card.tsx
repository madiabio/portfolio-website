import { YouTubeDemoCard } from "@/features/demos/youtube-demo-card";

export function FireControlDemoCard() {
  return (
    <YouTubeDemoCard
      title="Autonomous Fire-Control System"
      videoId="wc8d2S4JIZs"
      description={[
        "The explainer for this video is coming soon, but I really wanted to upload what I had so far. A few challenges have been encountered during this design process. Most notably, the Webots radars are only 2d, so I simulated 3d radars for the search radar (orange beam) and the fire-control radar (turret with laser pointer) by using the red projectile’s global coordinates (using Supervisor features) and injecting noise into the measurements. The search radar has the most noise and widest FOV, and the fire-control radar has the least noise but smallest FOV. Then I created a fake beam proto for the search radar to make it clear what’s currently in FOV.",
        "The two sensor measurements are fused using a Kalman filter which is used to predict where the ball will be in a specified number of timesteps. Once the error between the prediction and true value is minimised enough, the turret fires a blue projectile at that spot.",
        "If the red projectile hits the ground, it’s considered a point for offence. If the red projectile collides with the blue projectile, it is considered a point for defence.",
        "There is also a pre-aim subsystem which uses statistical learning to pre-slew to the region the system predicts the red projectile will launch from. This feature is semi-WIP.",
        "Currently I’m converging to about 34-37% accuracy, but hope to improve this with some parameter tuning.",
      ]}
    />
  );
}
