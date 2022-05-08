import { usersRepo } from 'helpers';

export default handler;
//req = {method, query, body} - destrukturyzacja
// ... - spread operator 
function handler({method, query, body}, res) {
    switch (method) {
        case 'GET': //read
            return getUserById();
        case 'PUT': //update /Create
            return updateUser();
        case 'DELETE': //delete
            return deleteUser();
        default:
            return res.status(405).end(`Method ${method} Not Allowed`)
    }
    //read
    function getUserById() {
        const user = usersRepo.getById(query.id);
        return res.status(200).json(user);
    }
    //update/create
    function updateUser() {
        try {
            usersRepo.update(query.id, body);
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }
    //delete
    function deleteUser() {
        usersRepo.delete(query.id);
        return res.status(200).json({});
    }
}
