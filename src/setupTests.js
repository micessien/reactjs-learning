import chai from 'chai'
import createChaiJestDiff from 'chai-jest-diff'
import dirtyChai from 'dirty-chai'


chai.use(dirtyChai).use(createChaiJestDiff())
