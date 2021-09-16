const a = document.getElementById('a');
const b = document.getElementById('b');
const form1 = document.getElementById('form1');
const spam_ans = document.getElementById('ans');
const ans_con = document.getElementById('ans_con');



form1.addEventListener('submit', function(e) {
    e.preventDefault();
    //console.log(a.value);
    //console.log(b.value);
    ans_con.classList.add('on');
    spam_ans.innerText = "wait";

    $.ajax({
        type: 'GET',
        url: '/ans',
        contentType: "application/json",
        data: {
            'aaaa': $('#a').val(),
            'bbbb': $('#b').val()
        },

        success: function(data) {
            //console.log("ok")
            //console.log(data);

            ans_con.classList.add('on');
            spam_ans.innerText = "ans is" + data;

        },
        error: function(response) {
            alert('server error occured');
            //console.log("error")
        }
    })


});