describe('The Book Shop', () => {
      it('Should get all the books', () => {
        const dataSelector = (name: string): string => `[data-selector="${name}"]`;

        cy.visit('http://localhost:5173/')
        cy.contains(dataSelector('title'), 'La Monadologie');
        //cy.get(dataSelector('title')).should('have.value', 'La Monadologie');
      })
      it("should", () => {
        const dataSelector = (name: string): string => `[data-selector="${name}"]`;
        cy.intercept('GET', 'http://localhost:5173/books', [
          {
            ISBN: '9780123456789',
            title: 'La Monadologie',
            author: 'Gottfried Wilhelm Leibniz',
            pageCount: 69,
          },
          // {
          //   "ISBN:9780123456789" : {
          //     "publishers" : [
          //       {
          //         "name": "Gottfried Wilhelm Leibniz",
          //       }
          //     ],
          //     "title" : 'La Monadologie',
          //     "number_of_pages": 69,
          //   }
          // },
          // {
          //   isbn: new ISBN('9780123456456'),
          //   title: 'Crime et châtiment',
          //   author: 'Fiodor Dostvoïevsdki',
          //   pageCount: 666,
          // },
        ]);
        cy.request('http://localhost:5173/books').toString()
      })
    })