const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('Scenario', () => {
  it("When student's grades is equal to or between 95 to 100, then grade should be O", () => {
    // Arrange
      const grade = 100;
    // Act
      const receivedGrade = gradeClassifier(grade);
    // Assert
      expect(receivedGrade).toMatch("O - Outstanding");
  });

  it("When student's grades is equal to or between 90 to 94.99, then grade should be V", () => {
    // Arrange
      const grade = 92.99;
    // Act
      const receivedGrade = gradeClassifier(grade);
    // Assert
      expect(receivedGrade).toMatch("V - Very Good");
  });

  it("When student's grades is equal to or between 85 to 89.99, then grade should be G", () => {
    // Arrange
      const grade = 89.98;
    // Act
      const receivedGrade = gradeClassifier(grade);
    // Assert
      expect(receivedGrade).toMatch("G - Good");
  });

  it("When student's grades is equal to or between 80 to 84.99, then grade should be S", () => {
    // Arrange
      const grade = 80;
    // Act
      const receivedGrade = gradeClassifier(grade);
    // Assert
      expect(receivedGrade).toMatch("S - Satisfactory");
  });

  it("When student's grades is equal to or between 75 to 79.99, then grade should be N", () => {
    // Arrange
      const grade = 75.01;
    // Act
      const receivedGrade = gradeClassifier(grade);
    // Assert
      expect(receivedGrade).toMatch("N - Needs Improvement");
  });

  it("When student's grades is equal to or less than 74.99, then grade should be D", () => {
    // Arrange
      const grade = 50;
    // Act
      const receivedGrade = gradeClassifier(grade);
    // Assert
      expect(receivedGrade).toMatch("D - Did not Meet Expectation");
  });
});
