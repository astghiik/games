// import React from 'react';


// export const createField = (f, mines, area, n, setNumbers) => {
//     if (mines.includes(f)) return 'x';
    
//     let q = 0;
//     if (f === 0) {
//         if (mines.includes(f + 1)) q++;
//         if (mines.includes(f + 30)) q++;
//         if (mines.includes(f + 31)) q++;
//     } else if (f === 29) {
//         if (mines.includes(f - 1)) q++;
//         if (mines.includes(f + 29)) q++;
//         if (mines.includes(f + 30)) q++;
//     } else if (f === 570) {
//         if (mines.includes(f - 29)) q++;
//         if (mines.includes(f - 30)) q++;
//         if (mines.includes(f + 1)) q++;
//     } else if (f === 599) {
//         if (mines.includes(f - 30)) q++;      
//         if (mines.includes(f - 31)) q++;
//         if (mines.includes(f - 1)) q++;
//     } else if (f < 29) {
//         if (mines.includes(f + 29)) q++;
//         if (mines.includes(f + 30)) q++;
//         if (mines.includes(f + 31)) q++;
//         if (mines.includes(f - 1)) q++;
//         if (mines.includes(f + 1)) q++;
//     } else if (f > 570) {
//         if (mines.includes(f - 29)) q++;  
//         if (mines.includes(f - 30)) q++;      
//         if (mines.includes(f - 31)) q++;
//         if (mines.includes(f - 1)) q++;
//         if (mines.includes(f + 1)) q++;
//     } else if (f % 30 === 0) {
//         if (mines.includes(f - 29)) q++;      
//         if (mines.includes(f - 30)) q++;
//         if (mines.includes(f + 30)) q++;
//         if (mines.includes(f + 31)) q++;
//         if (mines.includes(f + 1)) q++;
//     } else if ((f + 1) % 30 === 0) {
//         if (mines.includes(f - 30)) q++;  
//         if (mines.includes(f - 31)) q++;
//         if (mines.includes(f + 29)) q++;
//         if (mines.includes(f + 30)) q++;
//         if (mines.includes(f - 1)) q++;
//     } else {
//         if (mines.includes(f - 29)) q++;  
//         if (mines.includes(f - 30)) q++;      
//         if (mines.includes(f - 31)) q++; 
//         if (mines.includes(f + 29)) q++;
//         if (mines.includes(f + 30)) q++;
//         if (mines.includes(f + 31)) q++;
//         if (mines.includes(f - 1)) q++;
//         if (mines.includes(f + 1)) q++;
//     }

//     let textColor;
    
//     // return q === 0 ? '' : q;
//     if (q === 0) {
//         return '';
//     } else if (q === 1) {
//         textColor = 'primary';
//     } else if (q === 2) {
//         textColor = 'dark';
//     } else if (q === 3) {
//         textColor = 'danger';
//     } else if (q === 4) {
//         textColor = 'success';
//     } else if (q === 5) {
//         textColor = 'warning';
//     } else if (q === 6) {
//         textColor = 'info';
//     } else if (q === 7) {
//         textColor = 'secondary';
//     } else {
//         textColor = 'danger';
//     }
    
//     setNumbers([f, q])
//     n.push([f, q]);
    
//     //console.log([f, q])
//     let cn = area.includes(f + '') ? `visible text-${textColor}` : 'invisible';
//     return (
//         <div className={cn}>
//             {q}
//         </div>
//     )
// }