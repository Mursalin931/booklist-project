// alert('hello')
// 'use Strict'
let title = document.getElementById('title');
let author = document.getElementById('author');
let year = document.getElementById('year');
let btn = document.getElementById('btn');
let addBook = document.getElementById('booklist')



let x = 0
btn.addEventListener('click', function() {

    if (title.value === '') {
        alert('You have Missing Something.Please Try again !!')

    } else {
        let newRow = document.createElement('tr')
        let newtitle = document.createElement('th')
        newtitle.innerHTML = title.value;
        if (author.value === '') {
            alert('You have Missing Something.Please Try again !!')

        } else {
            let newAuthor = document.createElement('th')
            newAuthor.innerHTML = author.value;
            newRow.appendChild(newAuthor);
        }

        if (year.value === '') {
            alert('You have Missing Something.Please Try again !!')
        } else {

            let newYear = document.createElement('th')
            newYear.innerHTML = year.value;
            newRow.appendChild(newYear);
        }

        newRow.appendChild(newtitle);
        addBook.appendChild(newRow)
        deleteAction(newRow)
        editAction(newRow)


        /** ---------------------------------------> create delete action <------------------------------- */

        function deleteAction(dl_row) {
            let dltBtn = document.createElement('button')
            dltBtn.innerHTML = 'Delete';
            dltBtn.className = 'dl-btn';
            dl_row.appendChild(dltBtn)
            dltBtn.addEventListener('click', function() {
                addBook.removeChild(dl_row);
            })
        }

        /** ---------------------------------------> create Edit action <------------------------------- */


        function editAction(edit_row) {
            let editBtn = document.createElement('button')
            editBtn.innerHTML = 'Edit';
            editBtn.className = 'edit-btn';
            edit_row.appendChild(editBtn)
            editBtn.addEventListener('click', function() {
                btn.innerHTML = 'save'

                let x = newRow.children;
                for (let i = 0; i < x.length; i++) {
                    if (x[i] === newtitle) {
                        title.value = x[i].innerHTML;
                    }
                    if (x[i] === newAuthor) {
                        author.value = x[i].innerHTML;
                    }
                    if (x[i] === newYear) {
                        year.value = x[i].innerHTML;
                    }
                }
            })
        }

        /**---------------------------------> cerate save action <------------------------------------- */
    }
})