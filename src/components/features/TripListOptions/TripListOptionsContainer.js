import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, addTag, removeTag, changeSearchPhrase, sortByPrice, changeDuration } from '../../../redux/filtersRedux';


const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeDuration: value => dispatch(changeDuration(value)),
  addTag: tag => dispatch(addTag(tag)),
  removeTag: tag => dispatch(removeTag(tag)),
  sortByPrice: price => dispatch(sortByPrice(price))

});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
