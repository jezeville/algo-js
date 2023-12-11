function calcDistance(pointA, pointB) {
    const deltaX = pointB[0] - pointA[0];
    const deltaY = pointB[1] - pointA[1];

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    return parseFloat(distance.toFixed(2));
}