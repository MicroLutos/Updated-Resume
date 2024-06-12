function printResume() {
    window.print();
}

function downloadPDF() {
    const element = document.querySelector('.container'); // Select the container element containing your resume content
    html2pdf()
        .from(element)
        .save('John_Jefferson_A_Mamuad_Resume.pdf');
}
