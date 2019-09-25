
import React from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, Text, View, TouchableOpacity,ScrollView,Image} from 'react-native';

const ExercisesTypes = () => {
    return (
      
      <View style={{backgroundColor:"#AFEEEE", width:"100%",height:"100%"}}>
        <ScrollView>
          <Grid style={{marginTop:60}}>
            <Row>
            <Col >
        <TouchableOpacity >
         <Image style={{width:150, height:210, borderRadius:100,margin:8}}
         source={require('../assets/girl.jpg')}>
      </Image>
      
 
 <Text style={styles.TextStyle}>addition and subtraction</Text>

       </TouchableOpacity>
       
       </Col>
       <Col >
        <TouchableOpacity>
         <Image style={{width:150, height: 210, borderRadius:100,margin:8}}
         source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsg0q0QXdQIaf2Y3MyJnCR1lXK8XE1_xxD0oimjw8hnrJzQdOuQ'}}>
      </Image>
      <Text style={styles.TextStyle}> multiplication and division</Text>
       </TouchableOpacity>
       </Col>
       </Row>
  
   <Col style={{alignSelf:"center"}}>
       <TouchableOpacity   >
         <Image style={{width: 250, height: 210, borderRadius:100,margin:8}} 
         source={{uri:'https://previews.123rf.com/images/lenm/lenm1707/lenm170700159/81918724-illustration-of-stickman-students-holding-flash-cards-about-greater-than-less-than-and-equal-signs.jpg'}}>
      </Image>
      <Text style={styles.TextStyle}> greater than less OR Equal</Text>
       </TouchableOpacity>
       </Col> 
     </Grid>
      </ScrollView>
      </View>
  
    )
  }
  
  const styles = StyleSheet.create({
  
    TextStyle :{
      color:"#FFFFFF",
      fontSize: 20,
      fontWeight: 'bold',
      textAlign:"center"
      
    },
  });
     
     

export default ExercisesTypes;



