import { getRequest } from '../../bootstrap'

describe('getUser', () => {

    test('should get user', async () => {
        //arrange
        
        //act
        const response = await getRequest('/v1/users/pepito')

        //assert
        expect(response.statusCode).toEqual(404)
    });
});
