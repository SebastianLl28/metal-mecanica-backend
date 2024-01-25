import { findCategoryByName } from '../service/category.service.js'

export const listProduct = async () => {
  const adaptador = await findCategoryByName('Adaptador')
  const regulador = await findCategoryByName('Regulador')
  const rotulas = await findCategoryByName('Rotulas')
  const taponesAguaBronce = await findCategoryByName(
    'Tapones de Agua de Bronce'
  )
  const arandelasCobre = await findCategoryByName('Arandelas de Cobre')

  return [
    {
      description: 'Macho M10 x 1 - Hembra M10 x 1',
      price: 10.0,
      stock: 13,
      categoryId: adaptador.id
    },
    {
      description: 'Macho 7/16 x 24 - Hembra 3/8 x 24',
      price: 10.0,
      stock: 13,
      categoryId: adaptador.id
    },
    {
      description: 'Macho M10 x 1 - Hembra M12 x 1',
      price: 10.0,
      stock: 13,
      categoryId: adaptador.id
    },
    {
      description: 'Macho 3/8 x 24 - Hembra 7/13 x 24',
      price: 10.0,
      stock: 13,
      categoryId: adaptador.id
    },
    {
      description: 'Macho M12 x 1 - Hembra M10 x 1',
      price: 10.0,
      stock: 13,
      categoryId: adaptador.id
    },
    {
      description: 'Macho 7/16 x 20 - Hembra 3/8 x 24',
      price: 10.0,
      stock: 13,
      categoryId: adaptador.id
    },
    {
      description: 'Macho M10 x 1 - Hembra M10 x 1 Tipo VW',
      price: 10.0,
      stock: 13,
      categoryId: adaptador.id
    },
    {
      description: 'Macho 1/2 x 20 - Hembra 7/16 x 24',
      price: 10.0,
      stock: 13,
      categoryId: adaptador.id
    },
    {
      description: 'Macho M10x1.25 - Hembra M10 x 1.5Fiat',
      price: 10.0,
      stock: 13,
      categoryId: adaptador.id
    },
    {
      description: 'Toyota Hilux 4x4 der.',
      price: 10.0,
      stock: 13,
      categoryId: regulador.id
    },
    {
      description: 'Toyoya Hilux 4 x 4 izq.',
      price: 10.0,
      stock: 13,
      categoryId: regulador.id
    },
    {
      description: 'Regulador Hiace 3L derecho',
      price: 10.0,
      stock: 13,
      categoryId: regulador.id
    },
    {
      description: 'Regulador Hiace 3L izquierdo',
      price: 10.0,
      stock: 13,
      categoryId: regulador.id
    },
    {
      description: 'Regulador Carro Americano derecho',
      price: 10.0,
      stock: 13,
      categoryId: regulador.id
    },
    {
      description: 'Macho M10 x 1.5 - Hembra M12 x 1.75 Lado der.',
      price: 10.0,
      stock: 13,
      categoryId: rotulas.id
    },
    {
      description: 'Macho M12 x 1.75 - Hembra M12 x 1.75 Lado der.',
      price: 10.0,
      stock: 13,
      categoryId: rotulas.id
    },
    {
      description: 'Macho M12 x 1.75 - Hembra M12 x 1.75 Lado izq.',
      price: 10.0,
      stock: 13,
      categoryId: rotulas.id
    },
    {
      description: 'Macho M10 x 1.25 - Hembra M12 x 1.25 Lado der.',
      price: 10.0,
      stock: 13,
      categoryId: rotulas.id
    },
    {
      description: 'Macho M10 x 1.25 - Hembra Lado izq.',
      price: 10.0,
      stock: 13,
      categoryId: rotulas.id
    },
    {
      description: 'Macho corto M10 x 1.5 - Macho Largo M12 x 1.75 Camiones',
      price: 10.0,
      stock: 13,
      categoryId: rotulas.id
    },
    {
      description:
        'Macho corto M12 x 1.5 - Macho largo M14 x 1.5 Buses Medianos',
      price: 10.0,
      stock: 13,
      categoryId: rotulas.id
    },
    {
      description: '24mm',
      price: 10.0,
      stock: 13,
      categoryId: taponesAguaBronce.id
    },
    {
      description: '25mm',
      price: 10.0,
      stock: 13,
      categoryId: taponesAguaBronce.id
    },
    {
      description: '26mm',
      price: 10.0,
      stock: 13,
      categoryId: taponesAguaBronce.id
    },
    {
      description: '28mm',
      price: 10.0,
      stock: 13,
      categoryId: taponesAguaBronce.id
    },
    {
      description: '50mm',
      price: 10.0,
      stock: 13,
      categoryId: taponesAguaBronce.id
    },
    {
      description: '62mm',
      price: 10.0,
      stock: 13,
      categoryId: taponesAguaBronce.id
    },
    {
      description: '65mm',
      price: 10.0,
      stock: 13,
      categoryId: taponesAguaBronce.id
    },
    {
      description: '03 x 06 x 100',
      price: 10.0,
      stock: 13,
      categoryId: arandelasCobre.id
    },
    {
      description: '03 x 10 x 050',
      price: 10.0,
      stock: 13,
      categoryId: arandelasCobre.id
    },
    {
      description: '03 x 10 x 080',
      price: 10.0,
      stock: 13,
      categoryId: arandelasCobre.id
    },
    {
      description: '03 x 10 x 100',
      price: 10.0,
      stock: 13,
      categoryId: arandelasCobre.id
    },
    {
      description: '04 x 08 x 100',
      price: 10.0,
      stock: 13,
      categoryId: arandelasCobre.id
    },
    {
      description: '04 x 08 x 100-A',
      price: 10.0,
      stock: 13,
      categoryId: arandelasCobre.id
    },
    {
      description: '04 x 10 x 050',
      price: 10.0,
      stock: 13,
      categoryId: arandelasCobre.id
    },
    {
      description: '04 x 10 x 100',
      price: 10.0,
      stock: 13,
      categoryId: arandelasCobre.id
    },
    {
      description: '04 x 10 x 100-A',
      price: 10.0,
      stock: 13,
      categoryId: arandelasCobre.id
    },
    {
      description: '05 x 08 x 100',
      price: 10.0,
      stock: 13,
      categoryId: arandelasCobre.id
    },
    {
      description: '05 x 10 x 100',
      price: 10.0,
      stock: 13,
      categoryId: arandelasCobre.id
    },
    {
      description: '05 x 10 x 100-P',
      price: 10.0,
      stock: 13,
      categoryId: arandelasCobre.id
    },
    {
      description: '05 x 11 x 100',
      price: 10.0,
      stock: 13,
      categoryId: arandelasCobre.id
    },
    {
      description: '05 x 11 x 100-A',
      price: 10.0,
      stock: 13,
      categoryId: arandelasCobre.id
    }
  ]
}
