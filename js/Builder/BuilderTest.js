const {PersonBuilder}=require('./PersonBuilder');

const Ram=new PersonBuilder()
                            .withName('Omkar')
                            .withAge('24')
                            .address()
                                .withState('UP')
                                .withCity('Lucknow')
                             .work()
                                .withCompany('Random')
                                .build();

console.log(Ram.toString());