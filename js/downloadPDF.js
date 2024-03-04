document.getElementById('downloadLink_IV').addEventListener('click', function() {
    // Create an anchor element
    var downloadAnchor = document.createElement('a');

    // Set the href attribute to the path of your PDF file
    downloadAnchor.href = 'files/my_resume.pdf';

    // Set the target attribute to "_blank" to open in a new tab
    downloadAnchor.target = '_blank';

    // Append the anchor to the document body
    document.body.appendChild(downloadAnchor);

    // Trigger a click on the anchor to open in a new tab
    downloadAnchor.click();

    // Remove the anchor from the document body
    document.body.removeChild(downloadAnchor);
});
