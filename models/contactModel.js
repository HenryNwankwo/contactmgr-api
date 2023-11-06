const mongoose = require('mongoose');

/**=================================
 * FOR GETTING ALL CONTACT==========
 * =================================
 */

/**
 * @openapi
 * components:
 *  schemas:
 *    GetAllContacts:
 *      type: array
 *      items:
 *        type: object
 *        properties:
 *          id:
 *            type: string
 *            example: 65451bae2bed43bfc1a3ca85
 *          user_id:
 *            type: string
 *            example: 6544f0b429c651473da29777
 *          name:
 *            type: string
 *            example: Henry Ubanese
 *          email:
 *            type: string
 *            example: Chinwuba@hotmail.com
 *          phone:
 *            type: string
 *            example: +2347080000000
 *          createdAt:
 *            type: string
 *            format: date-time
 *            example: 2023-11-03T16:11:26.819Z
 *          updatedAt:
 *            type: string
 *            format: date-time
 *            example: 2023-11-03T16:36:59.407Z
 *          __v:
 *            type: number
 *            format: int64
 *            example: 0
 */

/**=================================
 * FOR CREATING AND GET CONTACT BY ID
 * =================================
 */

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateContact:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          example: Jake Nweke
 *        email:
 *          type: string
 *          example: jake@gmail.com
 *        phone:
 *          type: string
 *          example: +2347080000000
 *
 *    CreateContactResponse:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *          example: Contact added successfully!
 *        new_contact:
 *          type: object
 *          properties:
 *            id:
 *              type: string
 *              example: 65451bae2bed43bfc1a3ca85
 *            user_id:
 *              type: string
 *              example: 6544f0b429c651473da29777
 *            name:
 *              type: string
 *              example: Henry Ubanese
 *            email:
 *              type: string
 *              example: Chinwuba@hotmail.com
 *            phone:
 *              type: string
 *              example: +2347080000000
 *            createdAt:
 *              type: string
 *              format: date-time
 *              example: 2023-11-03T16:11:26.819Z
 *            updatedAt:
 *              type: string
 *              format: date-time
 *              example: 2023-11-03T16:36:59.407Z
 *            __v:
 *              type: number
 *              format: int64
 *              example: 0
 *
 *    GetContactById:
 *      type: object
 *      required:
 *        - id
 *        - user_id
 *        - name
 *        - email
 *        - phone
 *        - createdAt
 *        - updatedAt
 *        - __v
 *      properties:
 *            id:
 *              type: string
 *              example: 65451bae2bed43bfc1a3ca85
 *            user_id:
 *              type: string
 *              example: 6544f0b429c651473da29777
 *            name:
 *              type: string
 *              example: Henry Ubanese
 *            email:
 *              type: string
 *              example: Chinwuba@hotmail.com
 *            phone:
 *              type: string
 *              example: +2347080000000
 *            createdAt:
 *              type: string
 *              format: date-time
 *              example: 2023-11-03T16:11:26.819Z
 *            updatedAt:
 *              type: string
 *              format: date-time
 *              example: 2023-11-03T16:36:59.407Z
 *            __v:
 *              type: number
 *              format: int64
 *              example: 0
 */

/**=================================
 * FOR UPDATING CONTACT BY ID
 * =================================
 */

/**
 * @openapi
 * components:
 *  schemas:
 *    UpdateContactById:
 *      type: object
 *      required:
 *        anyOf:
 *          - name
 *          - email
 *          - phone
 *      properties:
 *        name:
 *          type: string
 *          example: Jake Nweke
 *        email:
 *          type: string
 *          example: jake@gmail.com
 *        phone:
 *          type: string
 *          example: +2347080000000
 *
 *    UpdateContactResponse:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *          example: Contact updated successfully!
 *        updated_contact:
 *          type: object
 *          properties:
 *            id:
 *              type: string
 *              example: 65451bae2bed43bfc1a3ca85
 *            user_id:
 *              type: string
 *              example: 6544f0b429c651473da29777
 *            name:
 *              type: string
 *              example: Henry Ubanese
 *            email:
 *              type: string
 *              example: Chinwuba@hotmail.com
 *            phone:
 *              type: string
 *              example: +2347080000000
 *            createdAt:
 *              type: string
 *              format: date-time
 *              example: 2023-11-03T16:11:26.819Z
 *            updatedAt:
 *              type: string
 *              format: date-time
 *              example: 2023-11-03T16:36:59.407Z
 *            __v:
 *              type: number
 *              format: int64
 *              example: 0
 *
 */

const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: [true, 'Please add contact name!'],
    },

    email: {
      type: String,
      required: [true, 'Contact email is required!'],
    },

    phone: {
      type: String,
      required: [true, 'Please add contact phone number!'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Contact || mongoose.model('Contact', contactSchema);
