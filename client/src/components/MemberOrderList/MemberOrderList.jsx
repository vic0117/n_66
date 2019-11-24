import React, { Component } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import CommentModal from "../CommentModal/CommentModal";
import { toast } from "react-toastify";
import { paginate } from "../../utils/paginate";
import { ReactComponent as Calendar } from "./images/calendar.svg";
import { ReactComponent as Size } from "./images/tshirt.svg";
import { ReactComponent as Checked } from "./images/check-circle-regular.svg";
import MemberOrderFilter from "../MemberOrderFilter/MemberOrderFilter";
import Pagination from "../../common/Pagination";

// import sotckholm from "./images/sotckholm-lhiver-1221 (2).jpg";
import "./MemberOrderList.css";

class MemberOrderList extends Component {
  state = {
    addModalShow: false,
    rating: "",
    reviewInfo: "",
    reviews: "",
    orderStatus: "",
    pageSize: 2, // 每頁幾筆
    currentPage: 1
  };

  getModal = value => {
    console.log(value);
    let key_to_update = {};
    key_to_update[value] = true;
    this.setState({
      addModalShow: Object.assign({}, this.state.addModalShow, key_to_update)
    });
  };

  closeModal = e => {
    this.setState({ addModalShow: false });
  };

  handleCommentsSubmit = async item => {
    let info = {
      avatar: this.props.userInfo.avatar,
      last_name_zh: this.props.userInfo.last_name_zh,
      gender: this.props.userInfo.gender,
      trip_name: this.state.reviewInfo.trip_name,
      trip_country: this.state.reviewInfo.trip_country,
      rating: this.state.rating,
      reviews: this.state.reviews,
      u_id: this.props.currentUser.user.u_id,
      trip_start_date: this.state.reviewInfo.trip_start_date,
      trip_end_date: this.state.reviewInfo.trip_end_date
    };
    await fetch(`http://localhost:3001/members_comments/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify(info)
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ feedback: data });
        if (this.state.feedback.success) {
          this.setState({ addModalShow: false });
          
          // 如果有輸入評論, 將commented改為1
          const { currentUser } = this.props;
          let addCommented;
          fetch(
            `http://localhost:3001/members_order/${currentUser.user.u_id}/${item.id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token")
              }
            }
          )
            .then(response => {
              if (response.status >= 400) {
                throw new Error("Bad response from server");
              }
              return response.json();
            })
            .then(data => {
              addCommented = data.rows[0].order_trip;
              addCommented = JSON.parse(addCommented);
              addCommented.forEach(product => {
                if (product.code === item.code) {
                  product.commented = 1;
                }
              });
              addCommented = JSON.stringify(addCommented);
              const info = { results: addCommented };
              console.log("results", info);
              console.log("item.id", item.id);
              fetch(
                `http://localhost:3001/members_order/${currentUser.user.u_id}/${item.id}`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token")
                  },
                  body: JSON.stringify(info)
                }
              )
                .then(response => {
                  if (response.status >= 400) {
                    throw new Error("Bad response from server");
                  }
                  return response.json();
                })
                .then(data => {
                  console.log(data);
                })
                .catch(function(err) {
                  console.log(err);
                });
            })
            .catch(function(err) {
              console.log(err);
            });

          function pageReload() {
            window.location = "/account/orders";
          }
          toast.success(this.state.feedback.msg.text);
          window.setTimeout(pageReload, 3000);
        } else {
          toast.error(this.state.feedback.msg.text);
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  handleRating = value => {
    this.setState({ rating: value });
  };

  handleSubmitComment = value => {
    this.setState({ reviewInfo: value });
  };

  handleCommentContent = value => {
    this.setState({ reviews: value });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    let { userOrder } = this.props;
    const { pageSize, currentPage } = this.state;
    const { length: count } = userOrder;
    const orders = paginate(userOrder, currentPage, pageSize);
    return (
      <>
        <MemberOrderFilter onSelectComments={this.props.onSelectComments} />
        <div className="order-list-container mt-4">
          <Row>
            <Col className="order-list-title">
              <span>訂單紀錄</span>
            </Col>
          </Row>
          <Row>
            {orders.map(order => (
              <Col
                className="order-card-container col-12 "
                key={order.order_id}
              >
                <Card
                  style={{
                    width: "100%",
                    borderTop: "1px solid #eaeaea",
                    borderRadius: "0",
                    paddingTop: "1rem"
                  }}
                  className="d-flex"
                >
                  <Card.Body>
                    <Col>
                      <Card.Title>
                        <span className="order-num">
                          訂單編號:{order.order_id}
                        </span>
                      </Card.Title>
                    </Col>
                    {order.order_info.map(item => (
                      <Col
                        className="d-flex position-relative order-container"
                        key={item.code}
                      >
                        <div
                          className="img-container col-md-4"
                          style={{
                            background: `url(
                              "http://localhost:3000/images/${item.trip_img ||
                                item.product_img}"
                            ) no-repeat center center`
                          }}
                        ></div>

                        <div className="order-info-container d-flex flex-column justify-content-between ">
                          <span style={{ color: "#96daf0" }}>
                            {item.trip_country || item.product_brand}
                          </span>
                          <Card.Title className="mt-1 mb-2">
                            {item.trip_name || item.product_name}
                          </Card.Title>
                          <div className="d-flex align-items-center mb-2">
                            {item.trip_duration ? (
                              <Calendar />
                            ) : (
                              <Size height="18" width="18" />
                            )}
                            <span className="ml-2">
                              {item.trip_duration ||
                                "尺寸: " + item.product_size}
                              {item.trip_duration ? "天" : ""}
                            </span>
                          </div>
                          <div className="vertical-align-middle mb-2">
                            {item.trip_name &&
                              item.trip_start_date + " - " + item.trip_end_date}
                          </div>
                          <div className="price-amount-container">
                            <div className="d-flex mb-2">
                              <span>
                                NT$: {item.trip_price || item.product_price}
                              </span>
                              <span className="ml-3">
                                數量: {item.trip_amount || item.product_amount}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="ml-auto mt-auto to-comment-container ">
                          {item.trip_name && !item.commented && (
                            <Button
                              className="to-comment"
                              onClick={() => this.getModal(item.code)}
                              reviewinfo={item}
                            >
                              前往評論
                            </Button>
                          )}

                          <CommentModal
                            show={this.state.addModalShow[item.code]}
                            reviewinfo={item}
                            userinfo={this.props.userInfo}
                            currentuser={this.props.currentUser}
                            onHide={this.closeModal}
                            handlerating={this.handleRating}
                            handlesubmitcomment={this.handleSubmitComment}
                            handlecommentcontent={this.handleCommentContent}
                            handlecommentssubmit={() =>
                              this.handleCommentsSubmit(item)
                            }
                          />
                        </div>
                      </Col>
                    ))}
                    <div className="mt-3 d-flex status ">
                      <p className="d-flex align-items-center">
                        狀態: {order.order_status}
                        {order.order_status === "已送達" ? (
                          <Checked width="18" height="18" className="ml-1" />
                        ) : null}
                      </p>
                      <p className="ml-auto">
                        合計: NT$ {order.order_total_price}
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className="mt-4 d-flex mx-auto justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </>
    );
  }
}

export default MemberOrderList;
