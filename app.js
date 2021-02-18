myArrayTexts = ['text1', 'text2', 'text3', 'text4', 'text5', 'text6', 'text7', 'text8', 'text9', 'text10', 
                'text11', 'text12', 'text13', 'text14', 'text15', 'text16', 'text17', 'text18', 'text19', 'text20', 
                'text21', 'text22', 'text23', 'text24', 'text25', 'text26', 'text27', 'text28', 'text29', 'text30', 
                'text31', 'text32', 'text33', 'text34', 'text35', 'text36', 'text37', 'text38', 'text39', 'text40', 
                'text41', 'text42', 'text43', 'text44', 'text45', 'text46', 'text47', 'text48', 'text49', 'text50',
                'text61', 'text62', 'text63', 'text64', 'text65', 'text66', 'text67', 'text68', 'text69', 'text70',
                'text71', 'text72', 'text73', 'text74', 'text75', 'text76', 'text77', 'text78', 'text79', 'text80',
                'text81', 'text82', 'text83', 'text84', 'text85', 'text86', 'text87', 'text88', 'text89', 'text90',
                'text91', 'text92', 'text93', 'text94', 'text95', 'text96', 'text97', 'text98', 'text99', 'text100',
               ];



function pageNumberFun(pageNumber) {
    if(pageNumber == 1) {
        myArrayTexts.forEach((element, index) => {
            if(index < 10) {
                document.getElementById(`context${index + 1}`).textContent = element;
            }

        });
    }

    if(pageNumber == 2) {
        myArrayTexts.forEach((element, index) => {
            if(index >= 10 && index < 20) {
                document.getElementById(`context${(index % 10) + 1}`).textContent = element;
            }

        });
    }

    if(pageNumber == 3) {
        myArrayTexts.forEach((element, index) => {
            if(index >= 20 && index < 30) {
                document.getElementById(`context${(index % 10) + 1}`).textContent = element;
            }

        });
    }

    if(pageNumber == 4) {
        myArrayTexts.forEach((element, index) => {
            if(index >= 30 && index < 40) {
                document.getElementById(`context${(index % 10) + 1}`).textContent = element;
            }

        });
    }

    if(pageNumber == 5) {
        myArrayTexts.forEach((element, index) => {
            if(index >= 40 && index < 50) {
                document.getElementById(`context${(index % 10) + 1}`).textContent = element;
            }

        });
    }

    if(pageNumber == 6) {
        myArrayTexts.forEach((element, index) => {
            if(index >= 50 && index < 60) {
                document.getElementById(`context${(index % 10) + 1}`).textContent = element;
            }

        });
    }

    if(pageNumber == 7) {
        myArrayTexts.forEach((element, index) => {
            if(index >= 60 && index < 70) {
                document.getElementById(`context${(index % 10) + 1}`).textContent = element;
            }

        });
    }

    if(pageNumber == 8) {
        myArrayTexts.forEach((element, index) => {
            if(index >= 70 && index < 80) {
                document.getElementById(`context${(index % 10) + 1}`).textContent = element;
            }

        });
    }

    if(pageNumber == 9) {
        myArrayTexts.forEach((element, index) => {
            if(index >= 80 && index < 90) {
                document.getElementById(`context${(index % 10) + 1}`).textContent = element;
            }

        });
    }

    if(pageNumber == 10) {
        myArrayTexts.forEach((element, index) => {
            if(index >= 90 && index < 100) {
                document.getElementById(`context${(index % 10) + 1}`).textContent = element;
            }

        });
    }
}

