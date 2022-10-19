const skills = [
    {id: 12345, skill: 'JavaScript', skillLevel: 'intermediate'},
    {id: 13345, skill: 'HTML5', skillLevel: 'intermediate'},
    {id: 14345, skill: 'CSS', skillLevel: 'beginner'},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
};

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find((skill) => skill.id === id);
    Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex((skill) => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skill.skillLevel = skill.skillLevel;
    skills.push(skill);
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}