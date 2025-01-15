// $(document).ready(function () {
//     $('#btn-print').click(function () {
//     $('#content').printThis();
//     });
//     });

// window.onload = function(){
//     document.getElementById("download")
//     .addEventListener("click", ()=>{
//     const invoice = this.document.getElementById("invoice");
//     console.log(invoice);
//     console.log(window);
//     html2pdf().from(invoice).save();
     
//     })
//     }

// window.onload = function () {
//     document.getElementById("download")
//         .addEventListener("click", () => {
//             const invoice = this.document.getElementById("invoice");
//             console.log(invoice);
//             console.log(window);
//             var opt = {
//                 margin: 1,
//                 filename: 'myfile.pdf',
//                 image: { type: 'jpeg', quality: 0.98 },
//                 html2canvas: { scale: 2 },
//                 jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//             };
//             html2pdf().from(invoice).set(opt).save();
//         })
// }
<script>
        document.getElementById("download").addEventListener("click", () => {
            const content = document.getElementById("content");
            const options = {
                margin: 1,
                filename: 'Sarthak_Hirpurkar_Resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().set(options).from(content).save();
        });
    </script>