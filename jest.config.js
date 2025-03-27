
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    transform: {
        '^.+\\.ts$': 'ts-jest'
    },
    moduleNameMapper: {
        '^../zad1$': '<rootDir>/zad1.ts'
    }
};