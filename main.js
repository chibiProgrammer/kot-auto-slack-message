function slack_send_message(message){
    var post_message = `https://slack.com/api/chat.postMessage?token=${slack_api_token}&channel=${channel_name}&text=${message}&as_user=true&user_name=${user_name}`;
    fetch(post_message);
    window.alert('send message!');
};

function king_of_time_event_listener(){
    // 出勤ボタン
    var attendance_btn_elem = document.getElementsByClassName('record-btn-inner record-clock-in');
    attendance_btn_elem[0].addEventListener('click', function(){slack_send_message(hello_message)});

    // 退勤ボタン
    var leaving_btn_elem = document.getElementsByClassName('record-btn-inner record-clock-out');
    leaving_btn_elem[0].addEventListener('click', function(){slack_send_message(goodbye_message)});
    window.alert('hello?');
};

setTimeout("king_of_time_event_listener()", 1000);