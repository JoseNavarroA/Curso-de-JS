export function solution(estudiantes, deathCount, nuevo) {
    if (deathCount == 0) {
      estudiantes.push(nuevo);
    } else {
      for (let i = 0; i < deathCount; i++) {
        estudiantes.pop();
      }
      estudiantes.push(nuevo);
      
    }
    return estudiantes
  
  }