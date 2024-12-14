function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const result = document.getElementById('result');
    
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters ** 2)).toFixed(2);
      let status = '';
  
      if (bmi < 18.5) {
        status = 'Underweight';
      } else if (bmi < 24.9) {
        status = 'Normal weight';
      } else if (bmi < 29.9) {
        status = 'Overweight';
      } else {
        status = 'Obese';
      }
  
      result.textContent = `Your BMI is ${bmi} (${status})`;
    } else {
      result.textContent = 'Please enter valid weight and height!';
    }
  }
  