function cResult() {
  let totalScore = 0;
  for (let i = 1; i <= 5; i++) {
    let selectedOption = document.querySelector('input[name="q' + i + '"]:checked');
    if (selectedOption) {
      totalScore += parseInt(selectedOption.value);
    } else {
      alert('Please answer all questions.');
      return;
    }
  }

  cshowResult(totalScore);
}

function cshowResult(totalScore) {
  document.getElementById('questionnaire').style.display = 'none';

  if (totalScore >= 5 && totalScore <= 9) {
    cshowResultDetails('result1');
  } else if (totalScore > 9 && totalScore <= 13) {
    cshowResultDetails('result2');
  } else if (totalScore > 13 && totalScore <= 17) {
    cshowResultDetails('result3');
  } else if (totalScore <= 20) {
    cshowResultDetails('result4');
  } else {
    alert('Unable to determine result.');
  }
}

function cshowResultDetails(resultId) {
  let resultElement = document.getElementById(resultId);
  if (resultElement) {
    resultElement.style.display = 'block';
  }
}
