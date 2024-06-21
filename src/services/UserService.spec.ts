import { UserService } from "./UserService"

describe('UserService', () => {
    const userService = new UserService();

    it('Deve adicionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console,'log')
        userService.createUser('Filipe', 'filipeteste@gmail.com')
        expect(mockConsole).toHaveBeenCalled()
    })
})