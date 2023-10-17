import User from './user.model.mjs';
import { genSalt, hash } from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';


class Users {
    static async getAll(query) {

        try {
            const filters = query && query.filters ? query.filters : {  }
            const sorter = query && query.sorter ? query.sorter : { createdAt: -1 };

            const users = await User.find(filters)
                .sort(sorter)
                .lean();
    
            return { users };            
        } catch (error) {
            return error.message;
        }
    };

    static async registerNewUser (data) {
        try {

            const { firstName, lastName, email, password } = data;

            const salt = await genSalt(32);

            const hashedPassword = await hash(password, salt)

            const newUser = new User ({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hashedPassword
            });

            await newUser.save();

            return newUser;
        } catch (error) {
            return error.message;
        }
    }

    static async login (data) {
        try {
            const { email, password } = data;

            const user = findOne({ email: email });

            if(!user) {
                return { status: 401, message: 'User not found!' }
            }

            const checkPassword = await bcrypt.compare(password, user.password);

            if (!checkPassword) {
                return { status: 401, message: 'Incorrect password!' }
            } else {
                return { status: 200, message: 'Authentication successful!' }
            }


        } catch (error) {
            return error.message;
        }
    }

    static async resetPassword (data) {
        const passwordToken = uuidv4();
        const passwordRecoveryUrl = `${server}/password-reset/${passwordToken}`;

        try {

            const { email } = data;

            const user = await User.findOne({ email: email });
            
            if (!email) {
                return { status: 404, message: 'Please enter your email!' };
            }

            if (!user || user.passwordToken !== 'null') {
                return { status: 404, message: "User doesn't exist, or link already sent." };
            }

            user.passwordToken = passwordToken;

            await user.save();

            // TODO Create function that will send mail with resetPassword link. At some point create a resetPassword page

            

        } catch (error) {
            return error.message;
        }
    }

    
};

export default Users