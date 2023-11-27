/********************
 * YOUR CODE BELOW! *
 ********************/
function moreThan5(num){
return num > 5
}

// function isNewTopScore(score, topscore){
//   return score >=15 && topscore <=18
// } this passed but correct syntax below
function isNewTopScore(score, topscore){
  return score > topscore
}

function isInDanger(gradeD){
  return gradeD >=60 && gradeD <=71
}

function isCoasting(gradeC){
  return gradeC >=72 && gradeC <=83
}

function isSucceeding(gradeB){
  return gradeB >=84 && gradeB <=92
}

function isFailing(gradeF){
  return gradeF < 60  
}

function isAcing(gradeA){
  return gradeA > 92
}

function isStudent(role1){
  return role1 === "student"
}

function isTeacher(role2){
  return role2 === "teacher"
}

function isAdmin(role3){
  return role3 === "admin"
}

function isElementary(schoolLevel){
  return schoolLevel === "elementary"
}

function areDifferentPeople(name1, name2){
  return name1 !== name2
}

function isMiddleSchoolTeacher(role, schoolLevel){
  return (role === "teacher") && (schoolLevel >= 6 && schoolLevel <= 8)
}

function notAnElementarySchoolAdministrator(schoolLevel, role){
  return (schoolLevel !== "elementary") || (role !== "admin") 
}


/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof isNewTopScore === 'undefined') {
  isNewTopScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
