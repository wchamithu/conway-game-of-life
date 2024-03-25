const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

snapshots = [];

gen = 0;

const nextGen = (grid, x, y) => {
    let newGrid = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    snapshots.push(grid);
    gen += 1;

    grid[0].forEach((cell, i) => {
        let neighbours = 0;
        if (!i) {
            if (grid[0][1]) {
                neighbours += 1;
            }
            if (grid[1][0]) {
                neighbours += 1;
            }
            if (grid[1][1]) {
                neighbours += 1;
            }
        } else if (i == x - 1) {
            if (grid[0][x - 2]) {
                neighbours += 1;
            }
            if (grid[1][x - 1]) {
                neighbours += 1;
            }
            if (grid[1][x - 2]) {
                neighbours += 1;
            }
        } else {
            if (grid[0][i + 1]) {
                neighbours += 1;
            }
            if (grid[0][i - 1]) {
                neighbours += 1;
            }
            if (grid[1][i]) {
                neighbours += 1;
            }
            if (grid[1][i + 1]) {
                neighbours += 1;
            }
            if (grid[1][i - 1]) {
                neighbours += 1;
            }
        }

        if (!cell) {
            if (neighbours == 3) {
                newGrid[0][i] = 1;
            }
        } else {
            if (neighbours == 2 || neighbours == 3) {
                newGrid[0][i] = 1;
            } else {
                newGrid[0][i] = 0;
            }
        }
    });

    grid[x - 1].forEach((cell, i) => {
        let neighbours = 0;
        if (!i) {
            if (grid[x - 1][1]) {
                neighbours += 1;
            }
            if (grid[x - 2][0]) {
                neighbours += 1;
            }
            if (grid[x - 2][1]) {
                neighbours += 1;
            }
        } else if (i == x - 1) {
            if (grid[x - 1][x - 2]) {
                neighbours += 1;
            }
            if (grid[x - 2][x - 1]) {
                neighbours += 1;
            }
            if (grid[x - 2][x - 2]) {
                neighbours += 1;
            }
        } else {
            if (grid[x - 1][i + 1]) {
                neighbours += 1;
            }
            if (grid[x - 1][i - 1]) {
                neighbours += 1;
            }
            if (grid[x - 2][i]) {
                neighbours += 1;
            }
            if (grid[x - 2][i + 1]) {
                neighbours += 1;
            }
            if (grid[x - 2][i - 1]) {
                neighbours += 1;
            }
        }

        if (!cell) {
            if (neighbours == 3) {
                newGrid[x - 1][i] = 1;
            }
        } else {
            if (neighbours == 2 || neighbours == 3) {
                newGrid[x - 1][i] = 1;
            } else {
                newGrid[x - 1][i] = 0;
            }
        }
    });

    grid.forEach((row, i0) => {
        if (i0 == 0 || i0 == x - 1) {
            return;
        }

        row.forEach((cell, i1) => {
            let neighbours = 0;
            if (i1 == 0) {
                if (grid[i0 - 1][i1]) {
                    neighbours += 1;
                }
                if (grid[i0 - 1][i1 + 1]) {
                    neighbours += 1;
                }
                if (grid[i0][i1 + 1]) {
                    neighbours += 1;
                }
                if (grid[i0 + 1][i1 + 1]) {
                    neighbours += 1;
                }
                if (grid[i0 + 1][i1]) {
                    neighbours += 1;
                }
            } else if (i1 == x - 1) {
                if (grid[i0 - 1][i1]) {
                    neighbours += 1;
                }
                if (grid[i0 - 1][i1 - 1]) {
                    neighbours += 1;
                }
                if (grid[i0][i1 - 1]) {
                    neighbours += 1;
                }
                if (grid[i0 + 1][i1 - 1]) {
                    neighbours += 1;
                }
                if (grid[i0 + 1][i1]) {
                    neighbours += 1;
                }
            } else {
                // console.log(i1 == x - 1);
                if (grid[i0 - 1][i1 - 1]) {
                    neighbours += 1;
                }
                if (grid[i0 - 1][i1]) {
                    neighbours += 1;
                }
                if (grid[i0 - 1][i1 + 1]) {
                    neighbours += 1;
                }
                if (grid[i0 + 1][i1 - 1]) {
                    neighbours += 1;
                }
                if (grid[i0 + 1][i1]) {
                    neighbours += 1;
                }
                if (grid[i0 + 1][i1 + 1]) {
                    neighbours += 1;
                }
                if (grid[i0][i1 + 1]) {
                    neighbours += 1;
                }
                if (grid[i0][i1 - 1]) {
                    neighbours += 1;
                }
            }

            if (!cell) {
                if (neighbours == 3) {
                    newGrid[i0][i1] = 1;
                }
            } else {
                if (neighbours == 2 || neighbours == 3) {
                    newGrid[i0][i1] = 1;
                    // console.log(neighbours);
                } else {
                    newGrid[i0][i1] = 0;
                }
            }
        });
    });
    // console.log(newGrid);
    return newGrid;
};

const update = () => {
    grid.forEach((row, i) => {
        row.forEach((val, i2) => {
            // console.log(i);
            // console.log(i2);
            if (val) {
                ctx.fillStyle = 'rgb(41, 41, 41)';
            } else {
                ctx.fillStyle = 'rgb(196, 196, 196)';
            }
            ctx.strokeStyle = 'rgb(41, 41, 41)';
            ctx.fillRect(50 * i2, 50 * i, 50, 50);
            ctx.strokeRect(50 * i2, 50 * i, 50, 50);
        });
    });
};

update();

// while (true) {
//     setTimeout(() => {
//         grid = nextGen(grid);
//         update();
//         console.log(canvas.toDataURL());
//     }, 5000);
// }

// grid = nextGen(grid, 10, 10);
// update();
// console.log(canvas.toDataURL());

document.addEventListener('keydown', (e) => {
    e.preventDefault();
    // console.log(e);
    if (e.key == 'ArrowRight') {
        grid = nextGen(grid, 10, 10);
        update();
        // console.log(canvas.toDataURL());
    } else if (e.key == 'ArrowLeft') {
        if (!snapshots.length) {
            return;
        }
        grid = snapshots[gen - 1];
        snapshots.pop();
        gen = gen - 1;
        update();
    }
    // console.log(snapshots);
});

const normaliseCoord = (coordinate) => {
    // if (coordinate < 0) {
    //     return 0;
    // }

    // if (coordinate > 10) {
    //     return 10;
    // }

    return Math.abs(Math.floor(coordinate));
};

canvas.addEventListener('contextmenu', (e) => e.preventDefault());
canvas.addEventListener('mousedown', (e) => {
    e.preventDefault();
    const rect = e.target.getBoundingClientRect();

    let x = e.pageX - rect.left - 15;
    let y = e.pageY - rect.top - 15;

    coordX = normaliseCoord(x / 50);
    coordY = normaliseCoord(y / 50);

    // console.log(`${e.clientX}, ${e.clientY}`);
    console.log(`${x}, ${y}`);
    // console.log(`${rect.left}, ${rect.top}`);
    console.log(`${coordX}, ${coordY}`);
    console.log(e.clientY);
    console.log(`${e.clientY - rect.top}`);
    console.log(rect);

    if (e.button == 0) {
        grid[coordY][coordX] = 1;
    } else if (e.button == 2) {
        grid[coordY][coordX] = 0;
    }
    update();
});

console.log(nextGen(grid, 10, 10));
