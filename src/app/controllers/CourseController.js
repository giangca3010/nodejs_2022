
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
    req.body.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`;

    const course = new Course(req.body);
    course.save()
      .then(() => res.redirect('/me/stored/course'))
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

    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/course'))
      .catch(next);

  }

  //[delete]
  destroy(req, res, next) {

    Course.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);

  }

  //[fourceDelete]
  fourceDestroy(req, res, next) {

    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);

  }

  //[restore]
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);

  }

  handleFormActions(req, res, next) {
    switch (req.body.action) {
      case 'delete':
        Course.delete({ _id: { $in: req.body.courseIds } })
          .then(() => res.redirect('back'))
          .catch(next);
    }

  }
}

module.exports = new CourseController();