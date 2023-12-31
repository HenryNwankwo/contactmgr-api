const router = require('express').Router();
const {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} = require('../controllers/contactController');
const validateToken = require('../middlewares/validateTokenHandler');

//Validating the routes as private
router.use(validateToken);

//For getting all contacts AND For creating contact

/**
 * @openapi
 * /api/v1/contacts:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: returns an array of contacts created by a user
 *    tags:
 *      - Contacts
 *    responses:
 *      200:
 *        description: A JSON Array of contacts.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GetAllContacts'
 *      400:
 *       description: Validation failed
 *      401:
 *       description: Unauthorized
 *      403:
 *       description: Forbidden
 *      404:
 *       description: Contacts not found
 *      500:
 *       description: Server Error
 *
 */

//FOR CREATING CONTACTS

/**
 * @openapi
 * /api/v1/contacts:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    summary: returns an object of the created contact
 *    tags:
 *      - Contacts
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreateContact'
 *    responses:
 *      200:
 *        description: Successful contact creation
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateContactResponse'
 *      400:
 *       description: Validation failed
 *      401:
 *       description: Unauthorized
 *      500:
 *       description: Server Error
 *
 */

router.route('/').get(getAllContacts).post(createContact);

/**=========================
 * For getting a contact by id
 * =======================**/

/**
 * @openapi
 * /api/v1/contacts/{id}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: returns an object containing a contact details
 *    tags:
 *      - Contacts
 *    parameters:
 *      - name: id
 *        in: path
 *        description: id of the contact
 *        required: true
 *    responses:
 *      200:
 *        description: Successful GET request.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GetContactById'
 *      400:
 *       description: Validation failed
 *      401:
 *       description: Unauthorized
 *      403:
 *       description: Forbidden
 *      404:
 *       description: Contact not found
 *      500:
 *       description: Server Error
 *
 */

router.route('/:id').get(getContactById);

/**=========================
 * For updating a contact by id
 * =======================**/

/**
 * @openapi
 * /api/v1/contacts/{id}:
 *  put:
 *    security:
 *      - bearerAuth: []
 *    summary: returns an object containing the updated contact details
 *    tags:
 *      - Contacts
 *    parameters:
 *      - name: id
 *        in: path
 *        description: id of the contact
 *        required: true
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UpdateContactById'
 *    responses:
 *      200:
 *        description: Successful Contact Update.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdateContactResponse'
 *      400:
 *       description: Validation failed
 *      401:
 *       description: Unauthorized
 *      403:
 *       description: Forbidden
 *      404:
 *       description: Contact not found
 *      500:
 *       description: Server Error
 *
 */

router.route('/:id').put(updateContact);

/**=========================
 * For deleting a contact by id
 * =======================**/

/**
 * @openapi
 * /api/v1/contacts/{id}:
 *  delete:
 *    security:
 *      - bearerAuth: []
 *    summary: returns an object containing the deleted contact details
 *    tags:
 *      - Contacts
 *    parameters:
 *      - name: id
 *        in: path
 *        description: id of the contact
 *        required: true *
 *    responses:
 *      200:
 *        description: Successful Contact deletion.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/DeleteContactResponse'
 *      400:
 *       description: Validation failed
 *      401:
 *       description: Unauthorized
 *      403:
 *       description: Forbidden
 *      404:
 *       description: Contact not found
 *      500:
 *       description: Server Error
 *
 */

router.route('/:id').delete(deleteContact);

module.exports = router;
