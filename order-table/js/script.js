"use strict";
// used https://stackoverflow.com/questions/14267781/sorting-html-table-with-javascript
// first answer and adjusted it to table with tbody
const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
    
document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const tbody = th.parentNode.parentNode.parentNode.children[1];
    Array.from(tbody.querySelectorAll('tr'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => tbody.appendChild(tr) );
})));
