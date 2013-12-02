describe('Hello World Application', function() {
  it('should change greeting when name input changes', function() {
	browser().navigateTo('/');
  
    expect(element('h1').text()).not().toEqual('Error')

    expect(element('h1').text()).toContain('Jane');

});
});