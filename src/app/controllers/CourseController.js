
const Course = require('../models/Course')
const { mongooseToObject } = require('../../ultil/mongoose');
const { redirect } = require('statuses');

class CourseController {

  // [GET] /course/:slug
  show(req, res, next) {

    Course.findOne({ slug: req.params.slug })
      .then(course => {
        res.render('courses/show', { course: mongooseToObject(course) });
      })
      .catch(next)

  }

  // course/create
  create(req, res, next) {
    res.render('courses/create')

  }

  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://i.ytimg.com/vi/${formData.videoId}/hqdefault.jpg`;

    const course = new Course(formData);
    course.save()
      .then(() => res.redirect('/'))
      .catch(error => {

      });
  }

  // course/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
    .then(course => res.render('courses/edit', {
      course: mongooseToObject(course),
    }))

  }


  //[put]
  update(req, res, next) {

    Course.updateOne({_id: req.params.id}, req.body)
    .then(() => res.redirect('/me/stored/course'))
    .catch(next);

  }

}

module.exports = new CourseController();