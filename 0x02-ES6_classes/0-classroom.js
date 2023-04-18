export default class ClassRoom {
  constructor (maxStudentsSize) {
    this._maxStudentSize = maxStudentsSize;
  }

  set maxStudentsSize (value) {
    if (typeof value !== 'number') {
      throw new Error('Size of the student must be type of Number');
    }
    this._maxStudentSize = value;
  }

  get maxStudentsSize () {
    return this._maxStudentSize;
  }
}
