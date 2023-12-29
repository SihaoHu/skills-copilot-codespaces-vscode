function skillsMember() {
    var skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'Django'];
    var skillsList = document.getElementById('skillsList');
    skillsList.innerHTML = '';
    for (var i = 0; i < skills.length; i++) {
        var skill = skills[i];
        var li = document.createElement('li');
        li.innerText = skill;
        skillsList.appendChild(li);
    }
}