const skills = [
    {id: 12345, skill: 'JavaScript', skillLevel: 'intermediate'},
    {id: 13345, skill: 'HTML5', skillLevel: 'intermediate'},
    {id: 14345, skill: 'CSS', skillLevel: 'beginner'},
];

module.exports = {
    getAll,
    getOne,
};

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}