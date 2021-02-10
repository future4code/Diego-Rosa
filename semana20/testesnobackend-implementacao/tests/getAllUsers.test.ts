import { UserBusiness } from "../src/business/UserBusiness"
import { User, UserRole } from "../src/model/User"

// Erro de  não autorizado.verificar se:
// - O código de erro está correto
// - Se a mensagem está correta
describe("Testing UserBusiness.allUsers", () => {
    let userDatabase = {}
    let hashGenerator = {}
    let tokenGenerator = {}
    let idGenerator = {}

    test(" Should return 'You must be an adimin acess this enpoint' when us", async () => {
        expect.assertions(2)

        try {
            const userBusiness = new UserBusiness(
                userDatabase as any,
                hashGenerator as any,
                tokenGenerator as any,
                idGenerator as any
            )

            await userBusiness.getAllUsers(UserRole.NORMAL)
        } catch (err) {
            expect( err.statusCode).toBe(401)
            expect(err.message).toBe("You must be an admin to acess this endpoint")
        }
    })
})

/**
 * Resposta de sucesso. Verificar se:
 * - Todas as funçôes mockadas foram chamadas
 * - A resposta de sucesso em si
 */
describe("Testing UserBusiness.allUsers", () => {
    let userDatabase = {}
    let hashGenerator = {}
    let tokenGenerator = {}
    let idGenerator = {}

    test("Should return 'You must be an adimin to acess endpoint' when us", async () => {
        const getAllUsers = jest.fn(() => [
            new User(
                "id",
                "Astrodev",
                "astrodev@gmail.com",
                stringToUserRole("ADMIN")
        ])
    })

    userDatabase = {getAlllUsers}

    const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
    )

    const result = await userBusiness.getAllUsers(UserRole.ADMIN)

    expect(getAllUsers).toHaveBeenCalledTimes(1)
    expect(result).toContainEqual({
        id: "id",
        name: "Astrodev",
        email: "astrodev@gmail.com",
        role: UserRole.ADMIN
    })
})