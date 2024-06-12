function printResume() {
    window.print();
}

function downloadPDF() {
    const element = document.querySelector('.container');
    html2pdf()
        .from(element)
        .save('resume.pdf');
}
