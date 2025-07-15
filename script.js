function simulateProjectile(v0, angleDeg, timeStep = 0.1) {
    const angleRad = angleDeg * (Math.PI / 180);
    const g = 9.81;
    let t = 0;
    let trajectory = [];
    let maxY = 0;

    while (true) {
        const x = v0 * Math.cos(angleRad) * t;
        const y = v0 * Math.sin(angleRad) * t - 0.5 * g * t * t;

        if (y < 0) {
            trajectory.push({ x, y: 0, t });
            break;
        }

        if (y > maxY) maxY = y;

        trajectory.push({ x, y, t });
        t += timeStep;
    }

    console.log(`Max height: ${maxY.toFixed(2)} meters`);
    console.log(`Range: ${trajectory[trajectory.length - 1].x.toFixed(2)} meters`);

    return trajectory;
}

console.log(simulateProjectile(80, 10));