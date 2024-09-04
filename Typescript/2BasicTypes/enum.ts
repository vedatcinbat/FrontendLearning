// Enums: allow you to define a set of named constants 
// either numeric or string values

// Numeric
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

let dir: Direction = Direction.Up;

console.log(`DirectionUp : ${dir}`); // 1

// String
enum DirectionString {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

let dirStr: Direction = Direction.Up;

console.log(`DirectionUp : ${dirStr}`); // UP
