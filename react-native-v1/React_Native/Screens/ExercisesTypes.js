import React from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import { View, TouchableOpacity, ScrollView, Image } from "react-native";

const ExercisesTypes = () => {
  return (
    <View style={{ backgroundColor: "#AFEEEE" }}>
      <ScrollView>
        <Grid>
          <Row style={{ marginLeft: 9 }}>
            <Col>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 160,
                    height: 250,
                    borderRadius: 100,
                    border: 2
                  }}
                  source={require("../Img/girl.jpg")}
                >
                </Image>
              </TouchableOpacity>
            </Col>
            <Col>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 160,
                    height: 250,
                    borderRadius: 100,
                    border: 2
                  }}
                  source={{
                    uri:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsg0q0QXdQIaf2Y3MyJnCR1lXK8XE1_xxD0oimjw8hnrJzQdOuQ"
                  }}
                ></Image>
              </TouchableOpacity>
            </Col>
          </Row>

          <Col style={{ alignSelf: "center" }}>
            <TouchableOpacity>
              <Image
                style={{
                  width: 250,
                  height: 250,
                  borderRadius: 100,
                  border: 2
                }}
                source={{
                  uri:
                    "https://previews.123rf.com/images/lenm/lenm1707/lenm170700159/81918724-illustration-of-stickman-students-holding-flash-cards-about-greater-than-less-than-and-equal-signs.jpg"
                }}
              ></Image>
            </TouchableOpacity>
          </Col>
        </Grid>
      </ScrollView>
    </View>
  );
};

export default ExercisesTypes;
