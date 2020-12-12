/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import Container from '../../Components/Container';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {metrics} from '../../style/metrics';
import TextButtons from '../../Components/Buttons/TextButtons';
import {Title} from 'react-native-paper';
import {colors} from '../../style/';
import {VictoryLine, VictoryGroup, VictoryPie} from 'victory-native';
import {ToggleButton} from '../../Components/Buttons/ToggleButton';
import Svg from 'react-native-svg';
import ButtonImage from '../../Assets/icons/MaskGroup.svg';
import ReportIcon from '../../Assets/icons/file.svg';
import HelpIcon from '../../Assets/icons/Help.svg';

function HeaderCard() {
    return (
        <Card style={{alignItems: 'center'}}>
            <HeaderContainer>
                <HeaderItem>
                    <HeaderItemTitle>NIFTY</HeaderItemTitle>
                    <Row>
                        <PointText>10417.30</PointText>
                        <PLText profit={true}>115.2 (+1.12%)</PLText>
                    </Row>
                </HeaderItem>
                <HeaderItem>
                    <HeaderItemTitle>SENSEX</HeaderItemTitle>
                    <Row>
                        <PointText>35352.02</PointText>
                        <PLText profit={true}>436.12 (+1.25%)</PLText>
                    </Row>
                </HeaderItem>
            </HeaderContainer>
            <SubContainer />
            <SubContainer>
                <HeaderItemTitle>Value as of Today</HeaderItemTitle>
                <PointText style={[fontStyle.fontSizeRegular]}>₹ 2,56,846.23</PointText>
            </SubContainer>
            <HeaderContainer>
                <HeaderItem>
                    <HeaderItemTitle>Invested</HeaderItemTitle>
                    <Row>
                        <PointText>₹ 2,50,000.00</PointText>
                    </Row>
                </HeaderItem>
                <HeaderItem>
                    <HeaderItemTitle>Unrealised Gain</HeaderItemTitle>
                    <Row>
                        <PointText>₹ 6,000.65</PointText>
                        <PLText profit={true}>
                            <FontAwesome name="caret-up" size={23} />
                        </PLText>
                    </Row>
                </HeaderItem>
                <HeaderItem>
                    <HeaderItemTitle>Annual Returns</HeaderItemTitle>
                    <Row>
                        <PointText>3.52%</PointText>
                        <PLText profit={true}>
                            <FontAwesome name="caret-up" size={23} />
                        </PLText>
                    </Row>
                </HeaderItem>
            </HeaderContainer>
            <SubContainer />
            <TextButtons title="PORTFOLIO INSIGHTS" />
        </Card>
    );
}

function GraphNotation({color, title}: any) {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 15,
            }}>
            <View
                style={{
                    width: 12,
                    height: 12,
                    borderRadius: 100,
                    backgroundColor: color,
                    marginRight: 15,
                }}
            />
            <Text>{title}</Text>
        </View>
    );
}

function LineChart() {
    const data = [
        {x: 0, y: 1},
        {x: 1, y: 1.2},
        {x: 2, y: 1.4},
        {x: 3, y: 1.6},
        {x: 4, y: 1.8},
        {x: 5, y: 2},
        {x: 6, y: 2.4},
        {x: 7, y: 2.8},
        {x: 8, y: 4},
    ];

    const data2 = [
        {x: 0, y: 0},
        {x: 1, y: 0.2},
        {x: 2, y: 0.4},
        {x: 3, y: 0.6},
        {x: 4, y: 0.8},
        {x: 5, y: 1},
        {x: 6, y: 1.5},
        {x: 7, y: 2},
        {x: 8, y: 3},
    ];

    return (
        <View>
            <Svg height={300}>
                <VictoryGroup>
                    <VictoryLine
                        name="line-1"
                        style={{
                            data: {stroke: colors.blue, strokeWidth: 5},
                        }}
                        interpolation="natural"
                        data={data}
                    />
                    <VictoryLine
                        name="line-2"
                        style={{
                            data: {stroke: colors.green, strokeWidth: 5},
                        }}
                        interpolation="natural"
                        data={data2}
                    />
                </VictoryGroup>
            </Svg>
        </View>
    );
}

function GraphCard() {
    return (
        <Card>
            <Title>Title</Title>
            <Row style={{justifyContent: 'flex-start'}}>
                <GraphNotation title="Invested Ammount" color={colors.green} />
                <GraphNotation title="Current Value" color={colors.blue} />
            </Row>
            <LineChart />
            <ToggleButton.Group>
                <ToggleButton.Button title="1m" />
                <ToggleButton.Button title="3m" />
                <ToggleButton.Button title="6y" />
                <ToggleButton.Button title="1y" />
                <ToggleButton.Button title="5y" active={true} />
            </ToggleButton.Group>
        </Card>
    );
}

function InvestmentAllocation() {
    const data = [
        {x: 'Other', y: 15},
        {x: 'Liquid', y: 10},
        {x: 'Debt', y: 25},
        {x: 'Equity', y: 50},
    ];

    const pieColors = ['#889DBB', '#86E286', '#FFB471', '#FFE47D'];

    return (
        <Card>
            <Title>Investment Allocation</Title>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <VictoryPie
                    colorScale={pieColors}
                    labels={['']}
                    width={180}
                    height={180}
                    data={data}
                    innerRadius={75}
                />
                <View style={{flexDirection: 'row'}}>
                    <View>
                        <View style={{flexDirection: 'row', padding: 5}}>
                            <Text style={{color: pieColors[4 - 1], marginRight: 10, fontSize: 16}}>50%</Text>
                            <Text style={{fontSize: 16}}>Equity</Text>
                        </View>
                        <View style={{flexDirection: 'row', padding: 5}}>
                            <Text style={{color: pieColors[4 - 2], marginRight: 10, fontSize: 16}}>25%</Text>
                            <Text style={{fontSize: 16}}>Debt</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{flexDirection: 'row', padding: 5}}>
                            <Text style={{color: pieColors[4 - 3], marginRight: 10, fontSize: 16}}>50%</Text>
                            <Text style={{fontSize: 16}}>Liquid</Text>
                        </View>
                        <View style={{flexDirection: 'row', padding: 5}}>
                            <Text style={{color: pieColors[4 - 4], marginRight: 10, fontSize: 16}}>50%</Text>
                            <Text style={{fontSize: 16}}>Other</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Card>
    );
}

function UpcomingSIP() {
    const {FONT_COLOR, FONT_COLOR_LIGHT} = useTheme();
    const SipItems = () => (
        <>
            <View style={{flexDirection: 'row', height: 60, marginVertical: 10}}>
                <View
                    style={{
                        backgroundColor: '#E5F9E7',
                        width: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{color: '#31AB3F', fontSize: 16, fontWeight: 'bold'}}>Apr</Text>
                    <Text style={{color: '#31AB3F', fontSize: 18}}>9</Text>
                </View>
                <View style={{paddingHorizontal: 20, justifyContent: 'center'}}>
                    <Text style={{color: FONT_COLOR, fontWeight: 'bold', fontSize: 14}}>₹ 2,500</Text>
                    <Text style={{color: FONT_COLOR_LIGHT}}>Invesco India Gold Growth Direct...</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', height: 60, marginVertical: 10}}>
                <View
                    style={{
                        backgroundColor: '#E5F9E7',
                        width: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{color: '#31AB3F', fontSize: 16, fontWeight: 'bold'}}>Apr</Text>
                    <Text style={{color: '#31AB3F', fontSize: 18}}>9</Text>
                </View>
                <View style={{paddingHorizontal: 20, justifyContent: 'center'}}>
                    <Text style={{color: FONT_COLOR, fontWeight: 'bold', fontSize: 14}}>₹ 2,500</Text>
                    <Text style={{color: FONT_COLOR_LIGHT}}>Invesco India Gold Growth Direct...</Text>
                </View>
            </View>
        </>
    );

    return (
        <Card>
            <Title>Upcoming SIP</Title>
            <SipItems />
        </Card>
    );
}

export default function Dashboard() {
    const ReeportButton = () => (
        <TouchableOpacity>
            <View
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    marginVertical: 10,
                    height: 70,
                    alignItems: 'center',
                }}>
                <ButtonImage width="100%" height="100%" style={{position: 'absolute'}} />
                <View style={{flexDirection: 'row', paddingHorizontal: 20, alignItems: 'center'}}>
                    <ReportIcon width={50} height={50} style={{marginRight: 10}} />
                    <Text style={{color: '#1A9483', fontSize: 16}}>Reports</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    const Button = () => (
        <TouchableOpacity
            style={{
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }}>
            <View style={{flexDirection: 'row', width: '100%', marginVertical: 10, height: 70, alignItems: 'center'}}>
                <View style={{flexDirection: 'row', paddingHorizontal: 20, alignItems: 'center'}}>
                    <HelpIcon width={50} height={50} style={{marginRight: 10}} />
                    <Text style={{fontSize: 16}}>Need Support?</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <Container scrollable={true}>
            <HeaderCard />
            <GraphCard />
            <InvestmentAllocation />
            <UpcomingSIP />
            <ReeportButton />
            <Button />
        </Container>
    );
}

const SubContainer = styled.View(() => ({
    marginBottom: metrics.baseMargin,
}));

const Row = styled.View({
    justifyContent: 'space-around',
    width: '100%',
    flexDirection: 'row',
});

const HeaderContainer = styled.View({
    flexDirection: 'row',
    height: 80,
});

const HeaderItem = styled.View({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
});

const HeaderItemTitle = styled.Text((props) => ({
    color: props.theme.FONT_COLOR_LIGHT,
    marginBottom: 5,
}));

const PointText = styled.Text((props) => ({
    color: props.theme.FONT_COLOR,
}));

const PLText = styled.Text<any>((props) => ({
    color: props.profit ? colors.green : 'red',
}));

const fontStyle = StyleSheet.create({
    fontSizeRegular: {
        fontSize: 20,
    },
});

const Card = styled.View(() => ({
    paddingTop: metrics.basePadding,
    paddingBottom: metrics.basePadding,
    paddingLeft: metrics.basePadding / 2,
    paddingRight: metrics.basePadding / 2,
}));
