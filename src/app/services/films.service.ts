import httpService from './http.service';

const filmsEndpoin = 'films/';

const filmsService = {
    getTop: async () => {
        const { data } = await httpService.get(filmsEndpoin + 'top');
        return data;
    },
    // getOne: async (id) => {
    //     const { data } = await httpService.get(productsEndpoint + id);
    //     return data;
    // },
    // getCategory: async (categoryActive) => {
    //     const { data } = await httpService.get(
    //         productsEndpoint + producstCategoryEndpoint + categoryActive,
    //     );
    //     return data;
    // },
};

export default filmsService;
