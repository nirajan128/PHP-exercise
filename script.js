document.addEventListener('DOMContentLoaded', () => {
  // Select the form element
  const form = document.getElementById('tempForm')
  const gradeform = document.getElementById('grade')

  // Add an event listener to handle form submission
  form.addEventListener('submit', event => {
    event.preventDefault() // Prevent the default form submission

    // Get input values
    const tempInput = document.getElementById('temp').value
    const featureEnabled = document.getElementById('featureEnabled').checked
    console.log(featureEnabled)

    // Create a query string
    const queryString = `temp=${encodeURIComponent(tempInput)}&featureEnabled=${
      featureEnabled ? '1' : '0'
    }`

    // Make an AJAX request to the PHP script
    fetch(`temperature_conversion.php?${queryString}`)
      .then(response => response.text())
      .then(data => {
        // Update the result on the page
        document.getElementById('result').innerText = data
      })
      .catch(error => {
        console.error('Error:', error)
      })
  })

  gradeform.addEventListener('submit', event => {
    event.preventDefault()
    const gradeInput = document.getElementById('gradeInput').value
    const query = `gradeInput=${encodeURIComponent(gradeInput)}`

    fetch(`grades.php?${query}`)
      .then(response => response.text())
      .then(data => {
        // Update the result on the page
        document.getElementById('result2').innerText = data
      })
      .catch(error => {
        console.error('Error:', error)
      })
  })
})
