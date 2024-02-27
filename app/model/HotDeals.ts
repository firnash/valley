export interface HotDeals {
    id: 2007,
    type: string,
    code: string,
    title: string,
    subtitle: string,
    description: string,
    trialPeriod: string,
    installmentPrice: number,
    installmentPeriod: string,
    rating: number,
    startDate: string,
    endDate: string,
    viewType: string,
    createdAt: string,
    items: Items[],
    media: Media[],
    thumbnail: Media,
    taggings: [],
    singleCollections: []
}

export interface Items {
    createdAt: string,
    updatedAt: string,
    deletedAt: string,
    uuid: string,
    name: string,
    body: string,
    collectionId: number,
    key: string,
    seq: number,
    entityType: string,
    entityId: number,
    optionKey: string,
    publication: {
        id: number,
        title: string,
        code: string,
        productId: number,
        prdType: number,
        detailEntity: string,
        content: string,
        offeringType: string,
        rating: number,
        isExistResidual: boolean,
        isAdult: number,
        preface: string,
        prefaceIconUrl: string,
        productName: string,
        brandName: string,
        media: MediaInPublication[],
        isTrial: true,
        tagsOnImage: string[],
        tagsOnDesc: string[],
        priceInfo: {
            discountPrice: number
            discountRate: number
            price: number
        },
        discounts: [],
        applyCoupon: boolean
    },
    prdType: number
}

export interface MediaInPublication {
    seq: number,
    type: string,
    uri: string,
    mimeType: string,
    deviceType: string
}

export interface Media {
    createdAt: string,
    updatedAt: string,
    deletedAt: string,
    uuid: string,
    mimeType: string,
    uri: string,
    fileName: string,
    objectKey: string,
    deviceType: string,
    collectionId: number,
    seq: number,
    itemKey: string,
    type: string
}