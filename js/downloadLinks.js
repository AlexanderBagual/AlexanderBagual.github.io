        document.getElementById('downloadLink_I').addEventListener('click', function() {
        // Create an anchor element
        var downloadAnchor = document.createElement('a');

        // Set the href attribute to the path of your zip file
        downloadAnchor.href = 'projects/Dynamic_Visual_Edits.zip';

        // Set the download attribute to the desired file name
        downloadAnchor.download = 'Dynamic_Visual_Edits.zip';

        // Append the anchor to the document body
        document.body.appendChild(downloadAnchor);

        // Trigger a click on the anchor to start the download
        downloadAnchor.click();

        // Remove the anchor from the document body
        document.body.removeChild(downloadAnchor);
    });

        document.getElementById('downloadLink_II').addEventListener('click', function() {
        // Create an anchor element
        var downloadAnchor = document.createElement('a');

        // Set the href attribute to the path of your zip file
        downloadAnchor.href = 'projects/Responsive_Web_Designs.zip';

        // Set the download attribute to the desired file name
        downloadAnchor.download = 'Responsive_Web_Designs.zip';

        // Append the anchor to the document body
        document.body.appendChild(downloadAnchor);

        // Trigger a click on the anchor to start the download
        downloadAnchor.click();

        // Remove the anchor from the document body
        document.body.removeChild(downloadAnchor);
    });

        document.getElementById('downloadLink_III').addEventListener('click', function() {
        // Create an anchor element
        var downloadAnchor = document.createElement('a');

        // Set the href attribute to the path of your zip file
        downloadAnchor.href = 'projects/Excel_Automation_Suite.zip';

        // Set the download attribute to the desired file name
        downloadAnchor.download = 'Excel_Automation_Suite.zip';

        // Append the anchor to the document body
        document.body.appendChild(downloadAnchor);

        // Trigger a click on the anchor to start the download
        downloadAnchor.click();

        // Remove the anchor from the document body
        document.body.removeChild(downloadAnchor);
    });
